import {
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import { SignIn} from "@/pages/auth";
import { User } from "@/pages/manage";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    title: "manage pages",
    layout: "manage",
    pages: [
      {
        icon: <UserPlusIcon {...icon} />,
        name: "manage",
        path: "/user",
        element: <User />,
      },
    ],
  },
  {
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      }
    ],
  },
];

export default routes;
