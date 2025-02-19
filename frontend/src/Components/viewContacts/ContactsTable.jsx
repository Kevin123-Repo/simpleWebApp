import { Button } from "reactstrap";
const ContactsTable = ({ data, handleDelete, handleNavigate }) => {
  return (
    <div className="table-container">
    <table className="table">
      <thead className="th">
        <tr className="tr">
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>City</th>
          <th>postcode</th>
        </tr>
      </thead>
      <tbody>
        {data.map((contact) => (
          <tr key={contact._id}>
            <td>{contact.firstName}</td>
            <td>{contact.lastName}</td>
            <td>{contact.email}</td>
            <td>{contact.address}</td>
            <td>{contact.city}</td>
            <td>{contact.postcode}</td>
            <td className="button-group">
              <Button
                className="button-delete"
                color="danger"
                size="sm"
                onClick={() => handleDelete(contact._id)}
              >
                Delete
              </Button>
              <Button
                className="button-edit"
                color="warning"
                size="sm"
                onClick={() => {
                  handleNavigate(contact._id);
                }}
              >
                Edit
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default ContactsTable;
