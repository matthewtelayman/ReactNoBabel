class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columnDefs: [
                {
                    headerName: "Make",
                    field: "make",
                    sortable: true,
                    filter: true
                },
                {
                    headerName: "Model",
                    field: "model",
                    sortable: true,
                    filter: true
                },
                {
                    headerName: "Price",
                    field: "price",
                    sortable: true,
                    filter: true
                }
            ],
            rowData: [
                {
                    make: "Toyota",
                    model: "Celica",
                    price: 35000
                },
                {
                    make: "Ford",
                    model: "Mondeo",
                    price: 32000
                },
                {
                    make: "Porsche",
                    model: "Boxter",
                    price: 72000
                }
            ]
        };
    }

    componentDidMount() {
        console.log("Grid mounted!");
    }

    render() {
        return (
            <div className="ag-theme-balham" style={{ height: '800px', width: '500px' }}>
                <h1>fix react grid call here</h1>
            </div>
        );
    }
}