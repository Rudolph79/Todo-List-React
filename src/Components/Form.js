import React, { useState } from 'react';
import Item from "./Item";
import {v4 as uuidv4} from 'uuid';

const Form = () => {
    const [dataArr,setDataArr] = useState([
        { txt: 'Se balader sur Paris', id: uuidv4() },
        { txt: 'Coder en React', id: uuidv4() },
        { txt: 'Faire du sport', id: uuidv4() },
    ]);

    const [stateInput, setStateInput] = useState();

    const deleteElement = (id) => {
        // console.log(id);
        const filteredState = dataArr.filter(item => {
            return item.id !== id;
        })
        setDataArr(filteredState);
    }

    const linkedInput = e => {
        setStateInput(e);
    }

    const addTodo = e => {
        e.preventDefault(e);
        const newArr = [...dataArr];
        const newTodo = {};

        newTodo.txt = stateInput;
        newTodo.id = uuidv4();

        newArr.push(newTodo);
        setDataArr(newArr);
        setStateInput('');
    }
    return (
        <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
            <form onSubmit={e => addTodo(e)} className="mb-3">
                <label htmlFor="todo" className="form-label mt-3">
                    Choses à faire
                </label>
                <input type="text" className="form-control" value={stateInput}
                       id="todo" onInput={e => linkedInput(e.target.value)} />

                <button className="mt-2 btn btn-primary d-block">Envoyer</button>
            </form>

            <h2>Liste des choses à faire</h2>
            <ul className="list-group">
                {dataArr.map(item => {
                    return (
                        <Item txt={item.txt} id={item.id}
                              key={item.id} delFunc={deleteElement}
                        />
                    )
                })}
            </ul>
        </div>
    );
}

export default Form;
