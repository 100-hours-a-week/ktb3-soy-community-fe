export function fromCreatedAt(createdAt){
  return createdAt.replace("T", " ")
}

export function getTitle(title){
  return title.substr(0, 27);
}

export function getCount(count){
  if (count >= 100000) return "100K";
  else if(count >= 10000) return "10K";
  else if(count >= 1000) return "1K";
  else return count;
}

