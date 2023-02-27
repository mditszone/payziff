import TableView from 'react-table-view'
import PZButton from './button'
import React from 'react';
import ReactPaginate from 'react-paginate';
import '../styles/table_view.scss';


function TableComponent(props) {
 
    return (
      <div className='pz-table'>
        <div className="header">
            <span>{props.header}</span>
            {props.buttonDisplay ? <PZButton value={props.value} type="button"  onClick={props.onClick} /> : null}
        </div>   
        <div className='table'>
        <table>
          <thead>
            <tr >
              {props.columns.map((f, i) => (
                <th className='column-header' key={i} data-field-name={f}>
                  <span>{f}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {props.data.map((d, i) => {
              return (
                <tr className='row' key={i}>
                  {
                    d.map((val, k) => {
                        return (<td className='field' key={k}>{val}</td>)
                    })
                  }
                </tr>
              )
            })}
          </tbody>
        </table>
        <div>
        </div>
        </div>
      </div>
    )

}


export default function PaginatedItems(props) {
  const [itemOffset, setItemOffset] = React.useState(0);
  const endOffset = itemOffset + props.itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems =  props.items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(props.items.length / props.itemsPerPage);


  const handlePageClick = (event) => {
    const newOffset = (event.selected * props.itemsPerPage) % props.items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
    <TableComponent
        data={currentItems} 
        columns={props.columns} 
        value={props.buttonName} 
        header={props.header}
        buttonDisplay={props.buttonDisplay}
        onClick={props.onClick}
      />
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
    </>
  );
}