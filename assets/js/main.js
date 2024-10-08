 const LISTS = {
    "softwareploitswap-eth-default": {
        "name": "SoftwareploitSwap Ethereum Default",
        "keywords": ["softwareploitswap", "default", "ethereum"],
        "logoURI": "https://softwareploit.top/logo.png",
        "sort": false
    },
    "softwareploitswap-extended": {
        "name": "SoftwareploitSwap Extended",
        "keywords": ["softwareploitswap", "extended"],
        "logoURI": "https://softwareploit.top/logo.png",
        "sort": true
    },
    "softwareploitswap-top-100": {
        "name": "SoftwareploitSwap Top 100",
        "keywords": ["softwareploitswap", "top 100"],
        "logoURI": "https://softwareploit.top/logo.png",
        "sort": true
    },
     "softwareploitswap-bnb": {
        "name": "SoftwareploitSwap Bnb",
        "keywords": ["softwareploitswap", "bnb"],
        "logoURI": "https://softwareploit.top/logo.png",
        "sort": true
    }
};
   
   const lis = Object.keys(LISTS).map((list) => {
      return `
        <li>
          <a href="/${list}.json">${list}</a>
        </li>
        <br />
      `
    });
    const ul = document.createElement('ul');
    ul.innerHTML = lis.join('');
    document.body.appendChild(ul);
