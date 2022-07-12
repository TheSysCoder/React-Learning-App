const PropsData = (props) => {
  const std = props.students;
  return (
    <div>
      <h3>Data comming from props</h3>
      <p>{std.roll}</p>
      <p>{std.name}</p>
      <p>{std.marks}</p>
    </div>
  );
};
export default PropsData;
