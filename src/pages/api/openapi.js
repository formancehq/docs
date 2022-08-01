const axios = require('axios');
const productOpenAPI = {
    ledger: {
        url: 'https://raw.githubusercontent.com/numary/ledger/main/pkg/api/controllers/swagger.yaml'
    },
    payments: {
        url: 'https://raw.githubusercontent.com/numary/payments/main/swagger.yml'
    }
}

export default function handler(request, response) {
    const { product, version } = request.query;
    const url = (productOpenAPI[product].url).replace('main', version)

    axios
        .get(url)
        .then(res => {
            response.status(200).send(res.data);

        })
        .catch(error => {
            response.status(404).send(error);
        });
}