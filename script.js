const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

        function sortArticles(articles) {
            return articles.sort((a, b) => {
                const ignoreWords = /^(a|an|the)\s/i;
                const cleanA = a.replace(ignoreWords, '');
                const cleanB = b.replace(ignoreWords, '');
                return cleanA.localeCompare(cleanB);
            });
        }

        const sortedBands = sortArticles(bands);

        const ul = document.getElementById('band');
        sortedBands.forEach(article => {
            const li = document.createElement('li');
            li.textContent = article;
            ul.appendChild(li);
        });