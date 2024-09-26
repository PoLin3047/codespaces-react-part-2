export default function MouseHandeler() {
return (<h1>
    onClick = {e => console.log("onClick")}
    onMouseEnter = {e=> console.log("onMouseEnter")}
</h1>
)
}