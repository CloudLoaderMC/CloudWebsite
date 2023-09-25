LIGHT_THEME = 'light';
DARK_THEME = 'ayu';

function getSimpleThemeName(theme) {
    return theme === LIGHT_THEME ? 'light' : 'dark';
}

function getOppositeSimpleTheme(theme) {
    return theme === 'light' ? 'dark' : 'light';
}

function getSpecificThemeName(theme) {
    return theme === 'light' ? LIGHT_THEME : DARK_THEME;
}

function getOppositeSpecificTheme(theme) {
    return theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
}

((doc) => {
    var html = document.querySelector('html');
    html.classList.remove('no-js');
    html.classList.add('js');

    html.classList.remove(getSpecificThemeName('light'));
    html.classList.add(getSpecificThemeName(localStorage.getItem('theme')));

    const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    doc.addEventListener('colorschemechange', (e) => {
        try {
            var theme = localStorage.getItem('theme');

            if (theme.startsWith('"') && theme.endsWith('"')) {
                theme = theme.slice(1, theme.length - 1);
                localStorage.setItem('theme', theme);
            }
        } catch (e) { }
        if (theme === null || theme === undefined) {
            theme = defaultTheme;
        }

        if (document.readyState === 'complete') {
            html.classList.remove(getSpecificThemeName(theme));
            theme = getOppositeSpecificTheme(theme);
            localStorage.setItem('theme', theme);
        }
        else {
            html.classList.remove(LIGHT_THEME);
        }

        html.classList.add(getSpecificThemeName(theme));
    });

    doc.querySelector('dark-mode-toggle').mode = localStorage.getItem('theme');
    doc.dispatchEvent(new Event("colorschemechange"));
})(document);

window.onload = function() {
    const url = 'https://meta.cloudloader.org/v1/versions/loader/';
    const headers = { 'User-Agent': 'Mozilla/5.0' };

    let req = new Request(url, { headers: headers, mode: 'no-cors' });
    fetch(req)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            else {
                return {};
            }
        })
        .then(data => {
            // TODO: Adjust to API
            if (data != {} && data.length > 0 && data[0].contains('game_version')) {
                document.querySelector('#version').innerText = 'Current Version: ' + data[0]['game_version'];
            }
        })
        .catch(error => {
            console.error(error);
        });
}
