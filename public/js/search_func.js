function ajax_get(url, callback) {
    let xml_http = new XMLHttpRequest();

    xml_http.open('GET', url, true);//конфигурируем запрос
    xml_http.send();//отправить запрос

    if (xml_http.readyState === 1){
        const img_container = document.getElementById('img-container');
        img_container.innerHTML = `
                <div class="preloader-wrapper big active">
                <div class="spinner-layer spinner-blue-only">
                    <div class="circle-clipper left">
                        <div class="circle"></div>
                    </div><div class="gap-patch">
                    <div class="circle"></div>
                </div><div class="circle-clipper right">
                    <div class="circle"></div>
                </div>
                </div>
            </div>`;
    }

    xml_http.onreadystatechange = function () {

        //проверяем, что запрос завершён(readyState: 4) и сервер не прислал ошибок
        if (xml_http.readyState === 4 && xml_http.status === 200) {
            try {

                let data = JSON.parse(xml_http.responseText);
                callback(data);
            }catch (e) {
                console.log(e.message + ' in ' + xml_http.responseText);
            }
        }
    };

}