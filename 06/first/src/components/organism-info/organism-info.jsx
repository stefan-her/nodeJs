import axios from 'axios';
import useSWR from 'swr';

function fetcherOrganismById(id) {

    return axios.get(`organisms/${id}`, {
        baseURL: "https://api.OrganismById.belgium.be/v1/",
        header: {
            'Access-Control-Allow-Origin': '*'
        }
    }).then(resp => {
        const data = resp.data.result.data;
        return {
            id: data.id,
            name: data.name_fr,
            acro: data.acro_fr
        }
    });
}

function Loader() {
    return (<p>Chargement ...</p>);
}

function OrganismError() {
    return (
        <p>Erreur</p>
    );
}

function OrganismDetail({id, name, acro}) {
    return (
        <div>
            <p>{id}</p>
            <p>{name}</p>
            <abbr>{acro}</abbr>
        </div>
    );
}


function OrganismInfo({oragnismId}) {

    const { isLoading, data, error } = useSWR(`organisms/${oragnismId}`, () => fetcherOrganismById(oragnismId));

    return (
        <>
        {
            isLoading ? (
                <Loader />
            ) : data ? (
                <OrganismDetail {...data} />
            ) : (
                <OrganismError />
            )
        }
        </>
    );
}

export default OrganismInfo;