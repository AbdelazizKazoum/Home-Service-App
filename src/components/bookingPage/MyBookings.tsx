import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function MyBookings() {
  return (
    <Tabs defaultValue="account" className="">
      <TabsList className="w-full flex justify-start bg-gray-200">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card></Card>
      </TabsContent>
      <TabsContent value="password">
        <Card></Card>
      </TabsContent>
    </Tabs>
  );
}
