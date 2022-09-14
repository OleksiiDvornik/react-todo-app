//Core
import { useDispatch, useSelector } from 'react-redux';
import { Form, Field } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { FieldArray } from 'react-final-form-arrays';

//Engine
import { selectors } from '../../../engine/core/todo/selectors';
import { addTodo } from '../../../engine/core/todo/thunk';

//Parts
import Input from './Input/index';

//Styles
import useStyles from './styles';

const initValues={ inputs: [''] };

function TodoForm() {  
    const dispatch = useDispatch();
    const todos = useSelector(selectors.todos);
    const classes = useStyles();

    const onSubmit = async (values) => {
        dispatch(addTodo(values, todos));
    };

    const validateField = value => value !== '' && value?.length < 5 ? 'error' : undefined;

    return (
        <Form 
            onSubmit={onSubmit}
            mutators={{...arrayMutators}}
            initialValues={initValues}
            render={({handleSubmit, form, errors }) => {
                return (
                    <form className={classes.form} onSubmit={event => handleSubmit(event).then(form.reset)}>
                        <FieldArray name="inputs">
                            {({ fields }) => (
                                <>
                                    {fields.map((name, index) =>
                                        <Field
                                            component={Input}
                                            name={name} key={index}
                                            type="text"
                                            className={classes.input}
                                            placeholder="Добавить новую задачу..."
                                            showDelete={fields.length > 1}
                                            onRemove={() => fields.remove(index)}
                                            validate={validateField}/>
                                    )}
                                    <button
                                        disabled={Object.keys(errors).length !== 0}
                                        className={classes.button}
                                        type="submit">Сохранить</button>
                                    <button
                                        className={classes.button}
                                        onClick={() => fields.push('')}
                                        type="button">Добавить поле</button>
                                </>
                            )}
                        </FieldArray>
                    </form>
                )
            }}
        />
    )    
}

export default TodoForm;

// //Core
// import React from 'react';
// import { v4 } from 'uuid';

// //Styles
// import useStyles from './style';

// function Form({ onAdd }) {
//     const classes = useStyles();
    
//     const handleAdd = (event) => {
//         event.preventDefault();
//         onAdd({id: v4(), description: event.target.description.value});
//         event.target.description.value = '';
//     }

//     return (
//         <form action='#' className={classes.form} onSubmit={handleAdd}>
//             <input 
//                 className={classes.input}
//                 type='text' 
//                 name='description' 
//                 placeholder='Добавить новую задачу...'/>
//             <button
//                 className={classes.button}
//                 type='submit'>Добавить</button>
//         </form>
//     )
// }

// export default TodoForm;
