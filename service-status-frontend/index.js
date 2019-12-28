// Make here the fetch
const baseUri = "http://localhost/api";

const statusWrapper = document.querySelector('.service_status__wrapper');
const loadingStatus = document.querySelector('.service_status__loading');
const nodeAppStatus = document.querySelector('.service_status__service_node-app');


const getStatusForService = () => {
    fetch(baseUri)
    .then(res => res.json())
    .then(data => {
        if(data.health && data.health.toLowerCase() === 'ok'){
            nodeAppStatus.classList.add('service_status__service_status_ok');
        }
        else {
            nodeAppStatus.classList.add('service_status__service_status_error');
        }
        statusWrapper.classList.remove('hidden');
        loadingStatus.classList.add('hidden');
    })
    .catch(err => {
        console.error(err);
        nodeAppStatus.classList.remove('hidden');
        loadingStatus.classList.add('hidden');
        statusWrapper.classList.add('service_status__service_status_error');
    });
}


const reference = setTimeout(()=> {
    getStatusForService();
}, 2000);