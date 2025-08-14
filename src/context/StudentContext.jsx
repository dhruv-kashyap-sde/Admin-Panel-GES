import { createContext, useContext, useState } from 'react';

// Create the context
export const StudentContext = createContext();

// Custom hook for accessing student data
export const useStudentContext = () => useContext(StudentContext);

export const StudentProvider = ({ children }) => {
  // Combined student data for both the leaderboard and student grid
  const [students, setStudents] = useState([
    {
      id: 1,
      position: 1,
      name: "Ahan Kumar",
      class: 8,
      points: 830,
      accuracy: 96,
      stars: 68,
      streak: 15,
      xp: 830,
      image: "https://i.pravatar.cc/100?img=23"
    },
    {
      id: 2,
      position: 2,
      name: "Hvrf",
      class: 7,
      points: 295,
      accuracy: 94,
      stars: 24,
      streak: 6,
      xp: 295,
      image: "https://i.pravatar.cc/100?img=7",
      initials: "HV"
    },
    {
      id: 3,
      position: 3,
      name: "12 June Child Test",
      class: 5,
      points: 165,
      accuracy: 92,
      stars: 13,
      streak: 5,
      xp: 165,
      image: "https://i.pravatar.cc/100?img=42"
    },
    {
      id: 4,
      position: 4,
      name: "Flower Girl",
      class: 6,
      points: 190,
      accuracy: 93,
      stars: 16,
      streak: 4,
      xp: 190,
      image: "https://i.pravatar.cc/100?img=18"
    },
    {
      id: 5,
      position: 5,
      name: "Eva",
      class: 3,
      points: 145,
      accuracy: 90,
      stars: 11,
      streak: 6,
      xp: 145,
      image: "https://i.pravatar.cc/100?img=31"
    },
    {
      id: 6,
      position: 6,
      name: "Hcdff",
      class: 4,
      points: 160,
      accuracy: 91,
      stars: 13,
      streak: 3,
      xp: 160,
      image: "https://i.pravatar.cc/100?img=65"
    },
    {
      id: 7,
      position: 7,
      name: "Sophia Kim",
      class: 2,
      points: 138,
      accuracy: 89,
      stars: 11,
      streak: 5,
      xp: 138,
      image: "https://i.pravatar.cc/100?img=9"
    },
    {
      id: 8,
      position: 8,
      name: "James Wilson",
      class: 6,
      points: 132,
      accuracy: 88,
      stars: 10,
      streak: 4,
      xp: 132,
      image: "https://i.pravatar.cc/100?img=54"
    },
    {
      id: 9,
      position: 9,
      name: "Olivia Davis",
      class: 5,
      points: 128,
      accuracy: 87,
      stars: 10,
      streak: 3,
      xp: 128,
      image: "https://i.pravatar.cc/100?img=26"
    },
    {
      id: 10,
      position: 10,
      name: "Liam Garcia",
      class: 1,
      points: 120,
      accuracy: 86,
      stars: 9,
      streak: 2,
      xp: 120,
      image: "https://i.pravatar.cc/100?img=33"
    }
  ]);

  // Function to get top performers
  const getTopPerformers = (count = 10) => {
    return students
      .slice()
      .sort((a, b) => b.points - a.points)
      .slice(0, count);
  };

  // Function to get student by ID
  const getStudentById = (id) => {
    return students.find(student => student.id === id);
  };

  // Function to calculate stats
  const getStats = () => {
    const topScorer = [...students].sort((a, b) => b.points - a.points)[0];
    const topStreak = [...students].sort((a, b) => b.streak - a.streak)[0];
    const topLessons = [...students].sort((a, b) => b.stars - a.stars)[0];

    return {
      topScorer,
      topStreak,
      topLessons
    };
  };

  const value = {
    students,
    setStudents,
    getTopPerformers,
    getStudentById,
    getStats
  };

  return (
    <StudentContext.Provider value={value}>
      {children}
    </StudentContext.Provider>
  );
};
