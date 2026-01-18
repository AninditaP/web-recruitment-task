import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, ScrollView, Switch } from "react-native";

export default function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("0047AB");
  const [dark, setDark] = useState(false); 

  const fetchExt = async () => {
    try {
      const res = await fetch(`https://www.thecolorapi.com/scheme?hex=${input}&mode=analogic&count=5`);
      const json = await res.json();
      setData([{ id: 1, title: "Generated", colors: json.colors.map(c => c.hex.clean) }]);
    } 
    catch (e) { 
        alert("API Error"); 
    }
  };

  const fetchBack = async () => {
    try {
      const res = await fetch('http://localhost:5001/api/palettes');
      const json = await res.json();
      setData(json);
    } catch (e) { alert("Check Port 5001"); }
  };

  useEffect(() => { fetchExt(); }, []);


  const bg = dark ? "#222" : "#fff";
  const txt = dark ? "#fff" : "#000";

  return (
    <View style={{ padding: 40, flex: 1, backgroundColor: bg }}>
      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 20, justifyContent: "space-between" }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: txt }}>🎨 Chroma</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ color: txt, marginRight: 10 }}>Dark Mode</Text>
          <Switch value={dark} onValueChange={setDark} />
        </View>
      </View>

      <TextInput 
        value={input} onChangeText={setInput} placeholder="Hex Code" 
        placeholderTextColor="#888"
        style={{ borderWidth: 1, borderColor: "#888", color: txt, padding: 10, marginBottom: 10, borderRadius: 5 }} 
      />
      
      <Button title="Generate a New Palette" onPress={fetchExt} />
      <View style={{ height: 10 }} />
      <Button title="View Existing Palettes" color="#ff0055" onPress={fetchBack} />
      
      <ScrollView style={{ marginTop: 20 }}>
        {data.map(item => (
          <View key={item.id} style={{ marginBottom: 20 }}>
            <Text style={{ fontWeight: "bold", marginBottom: 5, color: txt }}>{item.title}</Text>
            <View style={{ flexDirection: "row", height: 50, borderRadius: 5, overflow: "hidden" }}>
              {item.colors.map((c, i) => (
                <View key={i} style={{ flex: 1, backgroundColor: `#${c}` }} />
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}