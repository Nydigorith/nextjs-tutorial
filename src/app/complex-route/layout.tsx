export default function DashboardLayout({
  children,
  users,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <>
      {children}
      <div className="flex bg-blue-100"></div>
      <div> 2{notifications}</div>
      <div>1 {users}</div>
    </>
  );
}
