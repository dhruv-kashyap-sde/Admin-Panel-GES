import React, { useState, useMemo } from 'react';
import { useStudentContext } from '../../../context/StudentContext';
import { 
  Search, 
  Filter, 
  Eye, 
  Edit3, 
  Trash2, 
  Download, 
  Plus,
  Users,
  TrendingUp,
  Award,
  Star,
  MoreVertical,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Button } from '../../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select";
import { Checkbox } from "../../ui/checkbox";

const Students = () => {
  const { students } = useStudentContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedClass, setSelectedClass] = useState("all");
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder] = useState("asc");
  const [expandedStudent, setExpandedStudent] = useState(null);

  // Filter and sort students
  const filteredAndSortedStudents = useMemo(() => {
    let filtered = students.filter((student) => {
      const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesClass = selectedClass === "all" || student.class.toString() === selectedClass;
      return matchesSearch && matchesClass;
    });

    // Sort students
    filtered.sort((a, b) => {
      let aValue = a[sortBy];
      let bValue = b[sortBy];
      
      if (sortBy === "name") {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }
      
      if (sortOrder === "asc") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return filtered;
  }, [students, searchQuery, selectedClass, sortBy, sortOrder]);

  // Calculate statistics
  const stats = useMemo(() => {
    const totalStudents = students.length;
    const averageAccuracy = Math.round(students.reduce((sum, s) => sum + s.accuracy, 0) / totalStudents);
    const totalXP = students.reduce((sum, s) => sum + s.xp, 0);
    const classCounts = students.reduce((acc, s) => {
      acc[s.class] = (acc[s.class] || 0) + 1;
      return acc;
    }, {});
    
    return {
      totalStudents,
      averageAccuracy,
      totalXP,
      classCounts
    };
  }, [students]);

  // Get unique classes for filter
  const classOptions = useMemo(() => {
    const classes = [...new Set(students.map(s => s.class))].sort((a, b) => a - b);
    return [{ value: "all", label: "All Classes" }, ...classes.map(c => ({ value: c.toString(), label: `Class ${c}` }))];
  }, [students]);

  // Handle checkbox selection
  const handleSelectStudent = (studentId) => {
    setSelectedStudents(prev => 
      prev.includes(studentId) 
        ? prev.filter(id => id !== studentId)
        : [...prev, studentId]
    );
  };

  const handleSelectAll = () => {
    if (selectedStudents.length === filteredAndSortedStudents.length) {
      setSelectedStudents([]);
    } else {
      setSelectedStudents(filteredAndSortedStudents.map(s => s.id));
    }
  };

  // Get badge color based on performance
  const getPerformanceBadge = (accuracy) => {
    if (accuracy >= 95) return "bg-emerald-100 text-emerald-700 border-emerald-200";
    if (accuracy >= 90) return "bg-green-100 text-green-700 border-green-200";
    if (accuracy >= 80) return "bg-blue-100 text-blue-700 border-blue-200";
    if (accuracy >= 70) return "bg-amber-100 text-amber-700 border-amber-200";
    return "bg-red-100 text-red-700 border-red-200";
  };

  const getPerformanceLabel = (accuracy) => {
    if (accuracy >= 95) return "Excellent";
    if (accuracy >= 90) return "Very Good";
    if (accuracy >= 80) return "Good";
    if (accuracy >= 70) return "Average";
    return "Needs Improvement";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-gradient text-3xl font-bold">Students</h1>
          <p className="text-muted text-sm mt-1">Manage and monitor all students across different classes</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button size="sm" className="bg-gradient text-white">
            <Plus className="w-4 h-4 mr-2" />
            Add Student
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-surface rounded-xl p-4 border border-border">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Users className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{stats.totalStudents}</p>
              <p className="text-sm text-muted">Total Students</p>
            </div>
          </div>
        </div>
        
        <div className="bg-surface rounded-xl p-4 border border-border">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{stats.averageAccuracy}%</p>
              <p className="text-sm text-muted">Avg. Accuracy</p>
            </div>
          </div>
        </div>
        
        <div className="bg-surface rounded-xl p-4 border border-border">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Award className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{stats.totalXP.toLocaleString()}</p>
              <p className="text-sm text-muted">Total XP</p>
            </div>
          </div>
        </div>
        
        <div className="bg-surface rounded-xl p-4 border border-border">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-100 rounded-lg">
              <Star className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{Object.keys(stats.classCounts).length}</p>
              <p className="text-sm text-muted">Active Classes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-surface rounded-xl p-6 border border-border">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          <div className="flex  gap-4 flex-1">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search students by name..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Class Filter */}
            <Select value={selectedClass} onValueChange={setSelectedClass}>
              <SelectTrigger className="w-18 sm:w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {classOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort Options */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-20 sm:w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Sort by Name</SelectItem>
                <SelectItem value="class">Sort by Class</SelectItem>
                <SelectItem value="accuracy">Sort by Accuracy</SelectItem>
                <SelectItem value="points">Sort by Points</SelectItem>
                <SelectItem value="streak">Sort by Streak</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Bulk Actions */}
          {selectedStudents.length > 0 && (
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Edit3 className="w-4 h-4 mr-2" />
                Edit ({selectedStudents.length})
              </Button>
              <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">
                <Trash2 className="w-4 h-4 mr-2" />
                Delete ({selectedStudents.length})
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Students Grid */}
      <div className="bg-surface rounded-xl border border-border overflow-hidden">
        {/* Table Header */}
        <div className="p-4 border-b border-border bg-gray-50">
          <div className="flex items-center gap-4">
            <Checkbox
              checked={selectedStudents.length === filteredAndSortedStudents.length && filteredAndSortedStudents.length > 0}
              onCheckedChange={handleSelectAll}
            />
            <span className="text-sm font-medium text-gray-700">
              {selectedStudents.length > 0 ? `${selectedStudents.length} selected` : 'Select all'}
            </span>
            <span className="text-sm text-muted ml-auto">
              {filteredAndSortedStudents.length} students found
            </span>
          </div>
        </div>

        {/* Students List */}
        <div className="divide-y divide-border">
          {filteredAndSortedStudents.map((student) => (
            <div key={student.id} className="p-4 hover:bg-gray-50 transition-colors">
              {/* Main Row - Always Visible */}
              <div className="flex items-center gap-3">
                {/* Checkbox */}
                <Checkbox
                  checked={selectedStudents.includes(student.id)}
                  onCheckedChange={() => handleSelectStudent(student.id)}
                />

                {/* Avatar */}
                <div className="flex-shrink-0">
                  {student.image ? (
                    <img
                      src={student.image}
                      alt={student.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient flex items-center justify-center text-white font-semibold text-sm">
                      {student.name.substring(0, 2).toUpperCase()}
                    </div>
                  )}
                </div>

                {/* Main Info - Always Visible */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-gray-900 truncate text-sm sm:text-base">
                        {student.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <p className="text-xs sm:text-sm text-muted">Class {student.class}</p>
                        {/* Performance Badge - Always Visible on Mobile */}
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${getPerformanceBadge(student.accuracy)}`}>
                          {student.accuracy}%
                        </span>
                      </div>
                    </div>

                    {/* Desktop Stats - Hidden on Mobile */}
                    <div className="hidden lg:flex gap-6 text-sm text-muted mr-4">
                      <div className="text-center">
                        <p className="font-semibold text-gray-900">{student.points}</p>
                        <p className="text-xs">Points</p>
                      </div>
                      <div className="text-center">
                        <p className="font-semibold text-gray-900">{student.streak}</p>
                        <p className="text-xs">Streak</p>
                      </div>
                      <div className="text-center">
                        <p className="font-semibold text-gray-900">{student.stars}</p>
                        <p className="text-xs">Stars</p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-1">
                      {/* Desktop Actions */}
                      <div className="hidden sm:flex gap-1">
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit3 className="w-4 h-4" />
                        </Button>
                      </div>
                      
                      {/* Mobile/Tablet Expand Button */}
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="lg:hidden"
                        onClick={() => setExpandedStudent(expandedStudent === student.id ? null : student.id)}
                      >
                        {expandedStudent === student.id ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </Button>

                      {/* More Options */}
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expanded Details - Mobile/Tablet Only */}
              {expandedStudent === student.id && (
                <div className="mt-4 pt-4 border-t border-gray-200 lg:hidden">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {/* Performance Details */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-gray-900">Performance</h4>
                      <div className="text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPerformanceBadge(student.accuracy)}`}>
                          {getPerformanceLabel(student.accuracy)}
                        </span>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-gray-900">Statistics</h4>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div className="text-center p-2 bg-blue-50 rounded">
                          <p className="font-semibold text-blue-900">{student.points}</p>
                          <p className="text-blue-600">Points</p>
                        </div>
                        <div className="text-center p-2 bg-green-50 rounded">
                          <p className="font-semibold text-green-900">{student.streak}</p>
                          <p className="text-green-600">Streak</p>
                        </div>
                        <div className="text-center p-2 bg-amber-50 rounded">
                          <p className="font-semibold text-amber-900">{student.stars}</p>
                          <p className="text-amber-600">Stars</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Actions */}
                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="w-4 h-4 mr-2" />
                      View Profile
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Edit3 className="w-4 h-4 mr-2" />
                      Edit Student
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Load More */}
        {filteredAndSortedStudents.length === 0 ? (
          <div className="p-8 text-center">
            <p className="text-muted">No students found matching your criteria.</p>
          </div>
        ) : (
          <div className="p-4 border-t border-border text-center">
            <Button variant="outline">
              Load More Students
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Students;
