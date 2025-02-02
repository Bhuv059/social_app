import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
      <div className="lg:col-span-6">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle> Not Found</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Could not find requested page</p>
              <Link
                href="/"
                className="font-medium text-purple-600 dark:text-white-500 hover:underline"
              >
                Return Home
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
