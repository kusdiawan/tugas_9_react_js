import React from 'react';
import { Pagination } from 'react-bootstrap';

function PagePagination(){
	return(
		<>
 <Pagination>
                    <Pagination.First/>
                    <Pagination.Prev/>
                    <Pagination.Item href="#" active>1</Pagination.Item>
                    <Pagination.Ellipsis/>
                    <Pagination.Item href="#">10</Pagination.Item>
                    <Pagination.Item href="#">11</Pagination.Item>
                    <Pagination.Item href="#">12</Pagination.Item>
                    <Pagination.Item href="#">13</Pagination.Item>
                    <Pagination.Item href="#">14</Pagination.Item>
                    <Pagination.Ellipsis/>
                    <Pagination.Item href="#">20</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
                  

		</>
		)
}

export default PagePagination;