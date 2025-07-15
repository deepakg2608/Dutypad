const employees = [
  {
    id: 1,
    firstname: "Aarav",
    email: "a@a.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Update Landing Page",
        description: "Revamp the design of the landing page using Tailwind CSS.",
        date: "2025-07-13",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: 1,
        failed: false,
        title: "Fix Login Bug",
        description: "Resolve login redirect issue on Safari browser.",
        date: "2025-07-10",
        category: "Bug Fix"
      }
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 0
    }
  },
  {
    id: 2,
    firstname: "Vihaan",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: 1,
        failed: false,
        title: "Fix Login Bug",
        description: "Resolve login redirect issue on Safari browser.",
        date: "2025-07-10",
        category: "Bug Fix"
      }
    ],
    taskCount: {
      active: 0,
      newTask: 0,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 3,
    firstname: "Ishaan",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Database Migration",
        description: "Migrate database from MySQL to PostgreSQL.",
        date: "2025-07-08",
        category: "Backend"
      }
    ],
    taskCount: {
      active: 0,
      newTask: 0,
      completed: 0,
      failed: 1
    }
  },
  {
    id: 4,
    firstname: "Kavya",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Add Dark Mode",
        description: "Implement dark mode toggle in settings page.",
        date: "2025-07-13",
        category: "UI/UX"
      }
    ],
    taskCount: {
      active: 1,
      newTask: 0,
      completed: 0,
      failed: 0
    }
  },
  {
    id: 5,
    firstname: "Ananya",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Write Unit Tests",
        description: "Cover user authentication logic with unit tests.",
        date: "2025-07-14",
        category: "Testing"
      }
    ],
    taskCount: {
      active: 0,
      newTask: 1,
      completed: 0,
      failed: 0
    }
  }
];

const admin = [
  {
    id: 100,
    firstname: "Rohan",
    email: "admin@example.com",
    password: "123"
  }
];



export const setEmployeeData=()=>{
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
}

export const getEmployeeData=()=>{
  const employees=JSON.parse((localStorage.getItem("employees")))
  const admin=JSON.parse((localStorage.getItem("admin")))
  return {employees,admin}
}