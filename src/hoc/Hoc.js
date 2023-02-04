import React from 'react';
const hello = ({ name }) => { return <h1>Welcome {name}</h1> }



function Hoc(WrappedComponent) {
    return class extends React.Component {
        render() {
            return <WrappedComponent name='John'></WrappedComponent>
        }
    }
}

export const TableComponent = Hoc(hello)