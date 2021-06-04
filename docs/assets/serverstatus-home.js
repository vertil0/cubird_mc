---
---
{% include serverstatus.js %}
.then(data => {
    if (data.online == true) {
        // document.getElementById("serverVer").innerHTML = `Minecraft ${data.version} Server`;

        // siteNav dependent
        {% if site.siteNav %}
        document.getElementById("serverInd").classList.add("text-green-600");
        document.getElementById("serverPlaynow").innerHTML = `<span class="inline-block bg-yellow-500 rounded-full px-3 py-1 text-sm font-thin uppercase text-gray-900 mr-2 shadow-lg">Играй сейчас: ${data.players.online} Online</span>`;
        {% else %}
        document.getElementById("serverStatus").innerHTML = `<p class="font-bold select-none"><span class="text-green-600">&#11044;</span>&emsp;Мы онлайн!&ensp;&middot;&ensp;${data.players.online} играет</p>`;
        document.getElementById("serverStatusM").innerHTML = `<p class="font-bold select-none"><span class="text-green-600">&#11044;</span>&emsp;Онлайн, ${data.players.online} играет</p>`;
        {% endif %}
    }
    else {
        document.getElementById("serverPlaynow").innerHTML = `<span class="inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-thin uppercase text-gray-900 mr-2 shadow-lg">Сейчас оффлайн</span>`;
        document.getElementById("serverIP").classList.remove("bg-green-900");
        document.getElementById("serverIP").classList.add("bg-orange-800");

        // siteNav dependent
        {% if site.siteNav %}
        document.getElementById("serverInd").classList.add("text-red-600");
        {% else %}
        document.getElementById("serverStatus").innerHTML = `<p class="font-bold select-none"><span class="text-red-600">&#11044;</span>&emsp;Простите! Мы оффлайн...</p>`;
        document.getElementById("serverStatusM").innerHTML = `<p class="font-bold select-none"><span class="text-red-600">&#11044;</span>&emsp;Оффлайн</p>`;
        {% endif %}
    }
});