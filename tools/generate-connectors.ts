import fs from 'fs/promises';
import path from 'path';
import ejs from 'ejs';
import yaml from 'yaml';
import { fileURLToPath } from 'url';
import { access } from 'fs/promises';
import { constants } from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const TEMPLATE_DIR = path.join(__dirname, './templates/docusaurus/');
const OUTPUT_DIR = path.join(__dirname, '../docs/generated');
const PARTIALS_DIR = path.join(__dirname, '../docs/payments/partials/connectors');
const DATA_FILE = path.join(__dirname, './tmp/connector-configs.json');

ejs.fileLoader = (filePath) => {
  return fs.readFile(filePath, 'utf8');
};

async function generateConnectorPages() {
  try {
    // Ensure output directory exists
    await fs.mkdir(OUTPUT_DIR, { recursive: true });

    const rawData = await fs.readFile(DATA_FILE, 'utf8');
    const parsed = JSON.parse(rawData);
    if (!Array.isArray(parsed)) {
      throw new Error('Expected a JSON array');
    }
    const template = await fs.readFile(
      path.join(TEMPLATE_DIR, 'connector.mdx.ejs'), 
      'utf8'
    );

    // Generate each page
    for (const p of parsed) {
      if (p.provider === "Generic" || p.provider === "Dummypay") {
        continue;
      }

      // remove provider string since it is not required in the request
      const modifiedObject = { ...p, ["provider"]: undefined };

      var cData = {
        provider: p.provider,
        providerLower: p.provider.toLowerCase(),
        rawData: JSON.stringify(modifiedObject),
      };
      const content = ejs.render(template, {
        ...cData,
        helpers: {}
      });

      // Create frontmatter
      const frontmatter = {
        title: p.provider,
        description: `Learn how to use the ${p.provider} Connector to connect your Formance Platform with your ${p.provider} account.`
      };

      // Combine into final MDX
      const mdxContent = `---\n${yaml.stringify(frontmatter)}---\n\n${content}`;

      // Write file
      const outputPath = path.join(OUTPUT_DIR, `${p.provider.toLowerCase()}.mdx`);
      await fs.writeFile(outputPath, mdxContent);

      console.log(`Generated: ${outputPath}`);

      // Create partials if they don't already exist
      var partialFile = path.join(PARTIALS_DIR, `_${p.provider.toLowerCase()}.mdx`);
      const partialExists = await fileExists(partialFile);
      if (!partialExists) {
        await fs.writeFile(partialFile, '');
        console.log(`Created empty: ${partialFile}`);
      }
      
      var postSetupFile = path.join(PARTIALS_DIR, `_${p.provider.toLowerCase()}_post.mdx`);
      const postSetupExists = await fileExists(postSetupFile);
      if (!postSetupExists) {
        await fs.writeFile(postSetupFile, '');
        console.log(`Created empty: ${postSetupFile}`);
      }
    }

    console.log('✅ Page generation completed');
  } catch (error) {
    console.error('❌ Error generating pages:', error);
    process.exit(1);
  }
}

async function fileExists(filePath: string): Promise<boolean> {
  try {
    await access(filePath, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

generateConnectorPages();
