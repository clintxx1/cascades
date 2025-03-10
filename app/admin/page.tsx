"use client";
import AuthGuard from "./_components/authGuard";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form } from "@prisma/client";
import { ChangeEvent, useEffect, useState } from "react";
import TableData from "./_components/tableData";
import { Loader2, MoveLeftIcon, Power, Search } from "lucide-react";
import Link from "next/link";
import useDebounce from "@/hooks/useDebounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Admin() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [formList, setFormList] = useState<Form[]>([]);
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams.toString());
  const search = params.get("search") || "";
  const limit = Number(params.get("limit") || 1000);
  const branch = params.get("branch") || "None";
  const orderBy = params.get("sort") || "desc";

  useDebounce(
    () => {
      refetchFormQuery();
    },
    500,
    [orderBy, branch, search]
  );

  useEffect(() => {
    const fetchFormList = async () => {
      const res = await fetch(`/api/form?sort=asc`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const { data } = await res.json();
      if (data.length) {
        setFormList(data);
      }
    };

    fetchFormList();
    window.scrollTo(0, 0);
  }, []);

  const handleExport = async () => {
    try {
      setIsExporting(true);
      const response = await fetch("/api/excel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: formList }),
      });
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "data.xlsx";
        document.body.appendChild(a);
        a.click();
        a.remove();
      } else {
        console.error("Export failed");
      }
      setIsExporting(false);
    } catch (error) {
      console.log(error);
      setIsExporting(false);
    }
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchResult = e.target.value;
    if (searchResult) {
      params.set("search", searchResult);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const handleLimitChange = (e: string) => {
    const limitRes = e;
    if (limitRes) {
      params.set("limit", limitRes);
    } else {
      params.delete("limit");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const handleFilterByBranchChange = (e: string) => {
    const branch = e;
    if (branch && branch !== "None") {
      params.set("branch", branch);
    } else {
      params.delete("branch");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const handleSortByChange = (e: string) => {
    const sort = e;
    if (sort) {
      params.set("sort", sort);
    } else {
      params.delete("sort");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const refetchFormQuery = async () => {
    try {
      const res = await fetch(
        `/api/form?${params.toString() && `&${params.toString()}`}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.status === 200) {
        const { data } = await res.json();
        setFormList(data);
      }
    } catch (error) {
      console.log("ERR: ", error);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    setIsOpen(false);
    window.location.reload();
  };
  return (
    <section className="w-full h-full overflow-auto">
      <AuthGuard>
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <div className="flex items-center md:gap-4 gap-2 md:text-base text-sm">
              <MoveLeftIcon className="md:h-7 md:w-7 h-5 w-5" />
              <p>Back to Home</p>
            </div>
          </Link>
          <Button variant="secondary" onClick={() => setIsOpen(true)}>
            <div className="flex items-center md:gap-3 gap-1 md:text-base text-sm">
              <p>Logout</p>
              <Power className="h-4 w-4" />
            </div>
          </Button>
        </div>
        <div className="font-semibold lg:text-[42px] text-3xl text-crystalBlue">
          <p>Cascades Admin Section</p>
        </div>
        <div className="text-darkLiver text-3xl font-bold flex items-center lg:justify-between justify-end">
          <p className="hidden lg:block">Form Table</p>
          <Button
            onClick={handleExport}
            disabled={isExporting || !formList.length}
          >
            {isExporting ? (
              <div className="flex items-center justify-center gap-3">
                <Loader2 className="animate-spin" />
                <p>Exporting...</p>
              </div>
            ) : (
              <p>Export Excel</p>
            )}
          </Button>
        </div>
        <div className="flex lg:items-end lg:flex-row flex-col gap-4 px-2 lg:px-0">
          <div className="w-full lg:w-auto">
            <label htmlFor="search" className="text-sm">
              Search:
            </label>
            <div className="flex items-center relative pt-1">
              <Search className="absolute left-3 h-5 w-5" />
              <Input
                name="search"
                className="pl-10 py-2 w-full focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                placeholder="Search by Name"
                onChange={handleSearch}
                defaultValue={search}
              />
            </div>
          </div>
          <div className="flex items-end gap-4 w-full">
            <div className="w-full lg:w-auto">
              <label htmlFor="filter" className="text-sm">
                Filter by Branch:
              </label>
              <Select
                name="filter"
                defaultValue={branch}
                onValueChange={handleFilterByBranchChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select branch" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="None">None</SelectItem>
                  <SelectItem value="Preschool: Mandaluyong">
                    Preschool: Mandaluyong
                  </SelectItem>
                  <SelectItem value="Elementary: Mandaluyong">
                    Elementary: Mandaluyong
                  </SelectItem>
                  <SelectItem value="Preschool: Silang Cavite">
                    Preschool: Silang Cavite
                  </SelectItem>
                  <SelectItem value="Preschool: Tomas Morato, Quezon City">
                    Preschool: Tomas Morato, Quezon City
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* TODO: Uncomment when needed and add pagination */}
            {/* <div className="w-full lg:w-auto">
              <label htmlFor="limit" className="text-sm">Limit</label>
              <Select name="limit" defaultValue={limit.toString()} onValueChange={handleLimitChange}>
                <SelectTrigger >
                  <SelectValue placeholder="Select limit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                  <SelectItem value="100">100</SelectItem>
                </SelectContent>
              </Select>
            </div> */}
            <div className="w-full lg:w-auto">
              <label htmlFor="order" className="text-sm">
                Sort by:
              </label>
              <Select
                name="order"
                defaultValue={orderBy.toString()}
                onValueChange={handleSortByChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select limit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="desc">Latest</SelectItem>
                  <SelectItem value="asc">Oldest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <TableData data={formList} />
        <Dialog open={isOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Logout</DialogTitle>
              <DialogDescription>
                Are you sure you want to logout?
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant={"secondary"} onClick={() => setIsOpen(false)}>
                No
              </Button>
              <Button onClick={handleLogout}>Yes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </AuthGuard>
    </section>
  );
}
