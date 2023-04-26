//TRINIDAD, MIGUEL FRANCO T.
//SYSARCH MIDTERM LAB EXAM
//04-11-2023
const books = [
    {
        title: "House of the Dragon: Fire and Blood",
        character: [
            {
                id: 1,
                name: "Rhaenyra Targaryen",
                house: "House Targaryen"
            },
            {
                id: 2,
                name: "Laenor Velaryon",
                house: "House Velaryon"
            }
        ]
    },
    {
        title: "Game of Thrones: A song of ice and fire",
        character: [
            {
                id: 3,
                name: "Cersei Lannister",
                house: "House of Lannister"
            },
            {
                id: 4,
                name: "Arya Stark",
                house: "House of Stark"
            }
        ]
    }
]

const result = books.map((book) => {
    return book.character.map((info) => {
        if(info.id == 1 || info.id == 2){
            return null;
        }else{
            return `${info.name} ${info.house}`
        }
    });
});


console.log(result)