import DashboardLayout from "../features/dashboard/DashboardLayout";
import DashBorderFilter from "../features/dashboard/DashboardFilter";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Dashboard() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashBorderFilter />
      </Row>

      <DashboardLayout />
    </>
  );
}

export default Dashboard;
