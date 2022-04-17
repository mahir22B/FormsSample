import React, { useState } from 'react'
import Select from '@mui/material/Select';
import { Button, FormControl, MenuItem } from '@mui/material';
import './Edit.css'

const Edit = ({onStateChange, getFe, getBe, getDb, getCom, fe, be, db, com}) => {

    const [feId, setFeId] = useState(fe);
    const [coId, setCoId] = useState(com);
    const [beId, setBeId] = useState(be);
    const [dbId, setDbId] = useState(db);

    const inputEvent1 = (e) => {
        setFeId(e.target.value);
    }
    const inputEvent2 = (e) => {
        setCoId(e.target.value);
    }
    const inputEvent3 = (e) => {
        setBeId(e.target.value);
    }
    const inputEvent4 = (e) => {
        setDbId(e.target.value);
    }

    const sendIds = () => {
        getFe(feId)
        getBe(beId)
        getDb(dbId)
        getCom(coId)
        onStateChange();
    }

  return (
<>
<div className='select'>
<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
    <Select value={feId} onChange={inputEvent1} >
      <MenuItem value="React">React</MenuItem>
      <MenuItem value="Angular">Angular</MenuItem>
      <MenuItem value="Vue">Vue</MenuItem>
      <MenuItem value="JQuery">JQuery</MenuItem>
    </Select>
    </FormControl>
<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
    <Select value={coId} onChange={inputEvent2}>
      <MenuItem value="Intel">Intel</MenuItem>
      <MenuItem value="Google">Google</MenuItem>
      <MenuItem value="Meta">Meta</MenuItem>
      <MenuItem value="Microsoft">Microsoft</MenuItem>
    </Select>
    </FormControl>
<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
    <Select value={beId} onChange={inputEvent3}>
      <MenuItem value="NodeJs">NodeJs</MenuItem>
      <MenuItem value="Dot Net">Dot Net</MenuItem>
      <MenuItem value="Django">Django</MenuItem>
      <MenuItem value="Spring">Spring</MenuItem>
    </Select>
    </FormControl>
<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
    <Select value={dbId} onChange={inputEvent4}>
      <MenuItem value="MySql">MySql</MenuItem>
      <MenuItem value="Mongo">MongoDb</MenuItem>
      <MenuItem value="Cassandra">Cassandra</MenuItem>
      <MenuItem value="RavenDB">RavenDB</MenuItem>
    </Select>
    </FormControl>
</div>
<Button color="success" variant = "contained" className='btn' onClick={sendIds}>Save</Button>
<Button color="error" variant = "contained" className='btn' onClick={onStateChange}>Cancel</Button>
</>
  )
}

export default Edit;