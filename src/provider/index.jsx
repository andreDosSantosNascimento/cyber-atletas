import { HabitsProvider } from "./Habits";
import { GroupsProvider } from "./Groups";
import { RegisterProvider } from "./Register";
import { LoginProvider } from "./Login";
const Providers = ({ children }) => {
  return (
    <LoginProvider>
      <RegisterProvider>
        <GroupsProvider>
          <HabitsProvider>{children}</HabitsProvider>
        </GroupsProvider>
      </RegisterProvider>
    </LoginProvider>
  );
};
export default Providers;
