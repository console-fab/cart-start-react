function Dairy({ dairyResults, EditForm, handleDelete, editModal, editId, id, setEditModal}) {
    return (
        <div className='bubble back list5'>
				<h1 className='fit dairy bubble'>Dairy</h1>
				<ul>
					{dairyResults.map((result) => (
						<li key={result._id}>
							<strong>{result.name} {result.quantity ? ` x${result.quantity}` : ''}</strong>
							{result.location ? `, store: ${result.location}` : ''}
                            <br/>
							<button className='edit' id="openModal" onClick={() => editId(result._id)}>EDIT</button>
                            {editModal && (id === result._id) && <EditForm closeModal={setEditModal} result={result}/>}
							<button className='delete' onClick={() => handleDelete(result._id)}>DELETE</button>
						</li>
					))}
				</ul>
        </div>
    );
}

export default Dairy;