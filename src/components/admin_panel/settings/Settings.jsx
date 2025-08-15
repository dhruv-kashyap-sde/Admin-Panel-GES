import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../ui/card";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Button } from "../../ui/button";
import { Checkbox } from "../../ui/checkbox";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../../ui/select";

export default function Settings() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Profile Settings */}
        <Card className="shadow-lg rounded-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Profile Settings</CardTitle>
            <CardDescription>
              Update your personal information and contact details
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label className="mb-2" htmlFor="name">Full Name</Label>
              <Input id="name" defaultValue="Admin User" />
            </div>
            <div>
              <Label className="mb-2" htmlFor="email">Email</Label>
              <Input id="email" defaultValue="admin@example.com" />
            </div>
            <div>
              <Label className="mb-2" htmlFor="phone">Phone</Label>
              <Input id="phone" defaultValue="+1-555-0123" />
            </div>
            <Button className="bg-gradient">Update Profile</Button>
          </CardContent>
        </Card>

        {/* System Settings */}
        <Card className="shadow-lg rounded-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold">System Settings</CardTitle>
            <CardDescription>
              Configure system preferences and default options
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label className="mb-2">Default Language</Label>
              <Select className="w-full" defaultValue="en">
                <SelectTrigger>
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="mb-2">Time Zone</Label>
              <Select className="w-full" defaultValue="utc-5">
                <SelectTrigger>
                  <SelectValue placeholder="Select time zone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="utc-5">UTC-5 (Eastern Time)</SelectItem>
                  <SelectItem value="utc+1">UTC+1 (Central European Time)</SelectItem>
                  <SelectItem value="utc+5:30">UTC+5:30 (India Standard Time)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="bg-gradient">Save Settings</Button>
          </CardContent>
        </Card>

        {/* Notification Preferences */}
        <Card className="shadow-lg rounded-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Notification Preferences</CardTitle>
            <CardDescription>
              Manage how and when you receive notifications
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="email-notif">Email Notifications</Label>
              <Checkbox className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500" defaultChecked id="email-notif" />
            </div>
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="perf-reports">Performance Reports</Label>
              <Checkbox className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500" defaultChecked id="perf-reports" />
            </div>
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="school-alerts">New School Alerts</Label>
              <Checkbox className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500" id="school-alerts" />
            </div>
          </CardContent>
        </Card>

        {/* Data Management */}
        <Card className="shadow-lg rounded-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Data Management</CardTitle>
            <CardDescription>
              Export data and manage system backups
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <p className="text-muted w-full">Export Data</p>
              <Button className="secondary" variant="outlined">Export Student Data</Button>
              <Button className="secondary" variant="outlined">Export School Reports</Button>
              <Button className="secondary" variant="outlined">Export Analytics</Button>
            </div>
            <div>
              <p className="text-muted w-full">Backup</p>
              <Button className="secondary" variant="outlined">Create Backup</Button>
              <p className="text-xs text-gray-500 mt-1">
                Last backup: March 15, 2024
              </p>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
