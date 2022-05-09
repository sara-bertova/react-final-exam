import { Degree, Category, Programme } from "../../entities/Programme";

export const FETCH_PROGRAMMES = 'FETCH_PROGRAMMES';

export const fetchProgrammes = () => {
    return async (dispatch: any, getState: any) => {
        const idToken = getState().user.idToken

        const response = await fetch(
            'https://react-exam-68375-default-rtdb.europe-west1.firebasedatabase.app/programmes.json?auth='
            + idToken, {

            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });


        const data = await response.json(); // json to javascript
    
        if (!response.ok) {
            //There was a problem..
        } else {
                       
            // for (const key in data) {
            //     let programme = new Programme(data[key].firstLevel, 
            //                          data[key].secondLevel, 
            //                          data[key].title)
            //     programmes.push(programme)
            // }

            let degrees = [];
            for(const key in data) {
                let categories = [];
                for(const key2 in data[key].categories) {
                    let programmes = [];
                    for(const key3 in data[key].categories[key2].programmes) {
                        let prg = data[key].categories[key2].programmes[key3];
                        programmes.push(new Programme(prg.title, key3));
                    }
                    categories.push(new Category(data[key].categories[key2].title, programmes, key2));
                }
                degrees.push(new Degree(data[key].title, categories, key));
            
            }


            dispatch({ type: FETCH_PROGRAMMES, payload: degrees})
        }
    };
}