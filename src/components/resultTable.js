import React, { Component } from 'react'
//import Navbar from "./components/navbar";
//import ResultTable from "./components/resultTable";
import SearchBar from "./searchBar";
import API from "../utils/API"
import "./resultTable.css";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
class ResultTable extends Component {
    state = {
        search: "",
        sort: {
            column: null,
            direction: 'desc',
        },
        results: [],

    };

    // When the component mounts, get a list of all available base breeds and update this.state.breeds


    componentDidMount() {
        API.searchTerms()
            .then(res => {
                this.setState({ results: res.data.results })
                console.log(this.state.results)
            }).catch(err => console.log(err))
    }


    searchByColumn = query => {
        API.searchTerms(query)
            .then(res => {
                this.setState({ results: res.data.results })
                console.log(this.state.results)
            }).catch(err => console.log(err))
    };

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };




    filterBySearch = (search, employee) => {
        if (!search) {
            return true
        } else if (employee.name.first.toLowerCase().includes(search.toLowerCase()) || employee.name.last.toLowerCase().includes(search.toLowerCase())) {
            return true
        }
        else {
            return false
        }
    }

    sortFirstName = () => {
        if (this.state.sort.direction === "desc") {

            const sortedEmployees = this.state.results.sort((a, b) => {
                if (a.name.first < b.name.last) {
                    return -1
                } else if (a.name.first > b.name.first) {
                    return 1

                } else {
                    return 0
                }
            })
            this.setState({ results: sortedEmployees, sort: { direction: "asc" } })

        } else {

            const sortedEmployees = this.state.results.sort((a, b) => {
                if (a.name.first < b.name.first) {
                    return 1
                } else if (a.name.first > b.name.first) {
                    return -1

                } else {
                    return 0
                }
            })
            this.setState({ results: sortedEmployees, sort: { direction: "desc" } })

        }


    }






    sortLastName = () => {
        if (this.state.sort.direction === "desc") {

            const sortedEmployees = this.state.results.sort((a, b) => {
                if (a.name.last < b.name.last) {
                    return -1
                } else if (a.name.last > b.name.last) {
                    return 1

                } else {
                    return 0
                }
            })
            this.setState({ results: sortedEmployees, sort: { direction: "asc" } })

        } else {

            const sortedEmployees = this.state.results.sort((a, b) => {
                if (a.name.last < b.name.last) {
                    return 1
                } else if (a.name.last > b.name.last) {
                    return -1

                } else {
                    return 0
                }
            })
            this.setState({ results: sortedEmployees, sort: { direction: "desc" } })
        }
    }

    render() {
        return (
            <div>
                <SearchBar
                    search={this.state.search}
                    handleInputChange={this.handleInputChange} />
                <div className="table-responsive">
                    <table className="table table-striped table-resposive text-center table-hover" id="myTable2">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th onClick={this.sortLastName}>First Name</th>
                                <th onClick={this.sortLastName}>Last Name </th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Age </th>
                            </tr>
                        </thead>

                        { //table info input
                            this.state.results
                                .filter(employee => this.filterBySearch(this.state.search, employee))
                                .map(item => (
                                    <tbody key={item.login.uuid}>
                                        <tr>
                                            <td ><img src={item.picture.thumbnail} className="rounded-circle" alt="thumbnail" /></td>
                                            <td >{item.name.first}</td>
                                            <td >{item.name.last}</td>
                                            <td >{item.phone}</td>
                                            <td >{item.email}</td>
                                            <td>{item.dob.age}</td>
                                        </tr>
                                    </tbody>
                                ))}

                    </table>
                </div>

            </div >
        );
    };
};

export default ResultTable;



