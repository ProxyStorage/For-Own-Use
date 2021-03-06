var fingerprint = {
    flower: '67:1B:C8:F2:D4:20:EE:A7:EE:60:DA:BB:A3:F9:A4:D7:C8:29:0F:3E:2F:75:B6:A9:46:88:48:7D:D3:97:7E:98',
    texon: 'db dc c2 2d 3a 60 a7 92 92 84 4c 72 6e 21 0e 30 49 d5 e2 58 ad 08 67 20 83 79 f6 f6 52 a9 f0 16',
    dler: '46 e9 c5 a8 34 a9 d4 75 2d f3 95 aa 6d a6 ce 06 d4 a1 84 36 5b f2 14 14 90 1a 5a 53 0c d9 02 1a',
    Nexitally: 'fd:65:e5:8d:9c:c4:fa:7e:c8:65:6a:cc:93:2a:49:a5:97:d6:04:46:5f:3a:9e:75:3d:5b:dc:5c:ce:51:77:28',
    YTOO: 'bbc820c1848bab9d41457c1cdf0c0f7a1eed6e21f7ed5e67359b158cc7fe4cb4',
};

function operator(proxies, targetPlatform) {
    var airport = $arguments.airport, custom = $arguments.custom;
    if (!fingerprint[airport] && !custom)
        return proxies;
    return proxies.map(function (proxy) {
        proxy = addFingerprint(proxy, fingerprint[airport] || custom, targetPlatform);
        return proxy;
    });
}
function addFingerprint(proxy, fingerprint, targetPlatform) {
    if (proxy.type === 'trojan' && fingerprint && fingerprint !== 'undefined') {
        console.log('当前指纹：' + fingerprint);
        switch (targetPlatform) {
            case 'Surge':
                proxy.tfo = "".concat(proxy.tfo || false, ", server-cert-fingerprint-sha256=").concat(fingerprint);
                break;
            case 'QX':
                proxy.tfo = "".concat(proxy.tfo || false, ", tls-cert-sha256=").concat(fingerprint);
                break;
            default:
                console.log('当前客户端：' + targetPlatform + '|未添加节点证书');
        }
    }
    return proxy;
}
