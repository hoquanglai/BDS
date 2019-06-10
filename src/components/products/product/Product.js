import React, { Component } from 'react'
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table, TableRow } from 'reactstrap';
import axios from 'axios';
export default class Product extends Component {
    // loaitin = loaitin

    constructor() {
        super();
        this.state = {
            tinlist: []
        };
    }

    componentWillMount() {
        axios.get('../../../assets/json/tindang.json') // JSON File Path
            .then(response => {
                this.setState({
                    tinlist: response.data
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        const tinlist = this.state.tinlist;
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" lg="12">
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify"></i> Striped Table
                            </CardHeader>
                            <CardBody>
                                <Table responsive striped>
                                    <thead>
                                        <tr>
                                            <th>Username</th>
                                            <th>Date registered</th>
                                            <th>Role</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            tinlist.map((user) => {

                                                return (
                                                    // <TableRow
                                                    //     key={user.tieude}
                                                    //     id={user.tieude}
                                                    //     name={user.tieude}
                                                    //     selected={this.state.selected[user.tieude]}
                                                    //     // handleSelect={this.handleSelect}
                                                    // />
                                                    console.log(user)
                                                );
                                        })
                                      }
                                    </tbody>
                                </Table>
                                <Pagination>
                                    <PaginationItem disabled><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                                    <PaginationItem active>
                                        <PaginationLink tag="button">1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                                </Pagination>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

            </div>
        )
    }
}
