import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AdminLoginPage = () => {
  return (
    <form>
      <Label>Email</Label>
      <Input type="email" />
      <Label>Password</Label>
      <Input type="password" />
    </form>
  );
};

export default AdminLoginPage;
