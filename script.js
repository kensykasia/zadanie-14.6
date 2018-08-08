var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    getDefaultProps: function() {
        console.log('Domyślne ustawienia wartości propsów');
    },

    componentWillMount: function() {
        console.log('Komponent przed renderowaniem (ustawienie stanu w tej metodzie nie spowoduje przerenderowania)');
    },

    componentDidMount: function() {
        console.log('Komponent po renderowaniu, możemy wykonywać na nim różne operacje manipulacji, używać jQuery albo też pobrać dane');
    },

    componentWillReceiveProps: function() {
        console.log('Aktualizacja stanu na podstawie nadchodzących właściwości');
    },

    shouldComponentUpdate: function() {
        console.log('Sprawdza przed renderowaniem czy przerysowanie jest konieczne(dobra metoda do optymalizacji aplikacji)');
        return true;
    },

    componentWillUpdate: function() {
        console.log('Przygotowanie na przerenderowanie');
    },

    componentDIdUpdate: function() {
        console.log('Manipulacje DOM po przerysowaniu komponentu');
    },

    componentWillUnmount: function() {
        console.log('Posprzątanie przed usunięciem komponentu, możemy wykonywać wszystkie rzeczy związane z odpinaniem timerów czy nasłuchiwania zdarzeń na elementach DOM');
    },

    render: function() {
        return React.createElement('div', {
                className: 'container'
            },
            React.createElement('button', {
                className: 'button',
                onClick: this.decrement
            }, 'Odejmij (-1)'),
            React.createElement('span', {}, 'wynik: ' + this.state.counter),
            React.createElement('button', {
                className: 'button',
                onClick: this.increment
            }, 'Dodaj (+1)'),
        );
    }
});

var element = React.createElement('div', {},
    React.createElement('h1', {}, 'Dodaj lub odejmij'),
    React.createElement(Counter, {})
);
ReactDOM.render(element, document.getElementById('app'));
