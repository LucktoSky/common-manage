import React, { useState, useEffect, memo } from 'react'

import { Input, Button, Select,Option, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
const Pagination = ({totalDocs,getList,control,children}) =>{
    const [active, setActive] = useState(1);
    const [pagesize, setPagesize] = useState('5');
    const [search, setSearch] = useState("");
    var totalpage = Math.ceil(totalDocs/pagesize);
  
    const handleSearch = (e) =>{
      setSearch(e.target.value)
    }
    const getItemProps = (index) =>
      ({
        variant: active === index ? "filled" : "text",
        color: active === index ? "blue" : "blue-gray",
        onClick: () => setActive(index),
        className: "rounded-full",
      })
  
    const next = () => {
      if (active ===totalpage) return;
  
      setActive(active + 1);
    };
  
    const prev = () => {
      if (active === 1) return;
  
      setActive(active - 1);
    };
    const Pager = []
    if(totalpage<5){
      for(let i=1; i<=totalpage;i++){
        Pager.push( <IconButton key={i} {...getItemProps(i)}>{i}</IconButton>)
      }
    }
    else if(active<=3){
      for(let i=1;i<6;i++){
        Pager.push( <IconButton key={i} {...getItemProps(i)}>{i}</IconButton>)
      }
    }
    else if(active<totalpage-1){
      for(let i=active-2;i<=active+2;i++){
        Pager.push( <IconButton key={i} {...getItemProps(i)}>{i}</IconButton>)
      }
    }
    else{
      for(let i=totalpage-4;i<=totalpage;i++){
        Pager.push( <IconButton key={i} {...getItemProps(i)}>{i}</IconButton>)
      }
    }
    
  
    useEffect(() => {
      getList(active,pagesize,search)
  }, [active,pagesize,search,control])
    return (
      <>
        <div className='grid grid-cols-4 gap-2 text-white p-3'>
            <Select label="Select pagesize" className='flex-2'
                value={pagesize} onChange={e=>{setPagesize(e), setActive(1)}}>
                <Option value='5'>5</Option>
                <Option value='10'>10</Option>
                <Option value='20'>20</Option>
                <Option value='50'>50</Option>
            </Select>
            <Input type="search" label="Search" value={search} onChange={handleSearch}/>
            <div className='col-span-2'></div>
        </div>
        {children}
        <div className="flex items-center p-3 gap-4">
          <div className='basis-1/2 pl-5'>from {(active-1)*pagesize+1} to {active*pagesize<totalDocs?active*pagesize:totalDocs} of Total {totalDocs} </div>
          <Button
            variant="text"
            color="blue-gray"
            className="flex items-center gap-2 rounded-full"
            onClick={prev}
            disabled={active === 1}
          >
            <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
          </Button>
          <div className="flex items-center gap-2">
            {Pager}
          </div>
          <Button
            variant="text"
            color="blue-gray"
            className="flex items-center gap-2 rounded-full"
            onClick={next}
            disabled={active === totalpage}
          >
            Next
            <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
          </Button>
        </div>
      </>
    )
    }
    export default memo(Pagination);