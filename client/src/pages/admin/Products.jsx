import { useState } from "react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {  EventCard } from "@/components/Cards";
import { useEventContext } from "@/context/EventContext";


// import { format } from "date-fns";
// import { Popover } from "@headlessui/react";





function Products() {

  



  const{createEvent,getAllEvent,eventArray}=useEventContext()
 console.log(eventArray)

  // useEffect(() => {
  //   getAllEvent().then((res)=>{
  // console.log(res.allEvents)
  // return res.allEvents
  
  
  //   })
  // // console.log(res)
     
  //   }, []);






  
  const visibility = [
    { name: "public", id: "public" },
    { name: "private", id: "private" },
   
  ];
  const category = [
    { name: "tech", id: "tech" },
    { name: "sport", id: "sport" },
    { name: "entertainment", id: "entertainment" },
  ];

  const [events, setEvents] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    category: "",
    visibility: "",
  });

  const handleChange = (e) => {
    setEvents((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelectChange = (name, value) => {
    setEvents((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const {  title,description,date,location,category,visibility } =
      events;
    const formData = { title,description,date,location,category,visibility};
   
    console.log(formData);


    const response = await createEvent(formData);
    console.log(response.event)

//     eventArray =getAllEvent().then((res)=>{
//       console.log(res.allEvents)
//       return res.allEvents})
// console.log(eventArray)










  };

  return (
   <>
    <div className="w-full flex justify-end rounded-xl">
      <Sheet>
        <SheetTrigger>
          <Button>add product</Button>
        </SheetTrigger>
        <SheetContent className="w-full sm:w-[300px]">
          <SheetHeader>
            <SheetTitle>add product</SheetTitle>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full max-w-sm items-center gap-3">
                <Label htmlFor="title">Title</Label>
                <Input
                  onChange={handleChange}
                  id="title"
                  name="title"
                  placeholder="title"
                />

                <Label htmlFor="description">Description</Label>
                <Input
                  onChange={handleChange}
                  id="description"
                  name="description"
                  placeholder="description"
                />

                <Label htmlFor="category">Category</Label>
                <Select
                  onValueChange={(value) => handleSelectChange("category", value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {category.map((item) => (
                        <SelectItem key={item.id} value={item.id}>
                          {item.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <Label htmlFor="visibility">visibility</Label>
                <Select
                  onValueChange={(value) => handleSelectChange("visibility", value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a visibility" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {visibility.map((item) => (
                        <SelectItem key={item.id} value={item.id}>
                          {item.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <Label htmlFor="date">Date</Label>
                <Input
                  onChange={handleChange}
                  name="date"
                  id="date"
                  placeholder="date"
                />

          

                <Label htmlFor="location">location</Label>
                <Input
                  onChange={handleChange}
                  id="location"
                  name="location"
                  placeholder="location"
                />

                <Button type="submit">Add Event</Button>
              </div>
            </form>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
    <div className="flex flex-row flex-wrap gap-2">
      {eventArray.map((event)=>{
        return(

          <>
           <EventCard event={event}/>
          </>
        )
      })}

    </div>
    


   </>
  );
}

export default Products;
