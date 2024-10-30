async function getData(){
    const result = await fetch('https://rickandmortyapi.com/api/character');
    const character = await result.json();
     console.log(character)
     const characterArr = character.results.map(elemento => Object.entries(elemento));
     console.log(characterArr)
     const characterArrSliced = characterArr.slice(0,6);
     character.results.forEach(element => {
        const randomData = (min, max) => Math.floor(Math.random() * max - min +1) + min;
        const randInt = randomData(1, characterArr.length); 
        const randIndex = randInt;
        for(i = 0; i < characterArrSliced.length; i++){
            if(element.id == i){
                const box = document.createRange().createContextualFragment(`
                    
                    <div class="grid-box box-${i}"><a href="" class="fa fa-star fa-2x"></a>
                         <img src="${characterArr[randIndex][8][1]}" alt="">
                    </div>
                    
                    `)
                    const stories = document.getElementById('stories');
                    stories.append(box)
                }
            }
            console.log(characterArr[randIndex][8][1])
        });
}

getData()