import 'package:flutter/cupertino.dart';

class PageScaffoldApp extends StatelessWidget {
  const PageScaffoldApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const CupertinoApp(
      theme: CupertinoThemeData(brightness: Brightness.dark),
      home: PageScaffoldExample(),
    );
  }
}

class PageScaffoldExample extends StatelessWidget {
  const PageScaffoldExample({super.key});

  @override
  Widget build(BuildContext context) {
    return CupertinoPageScaffold(
      navigationBar: const CupertinoNavigationBar(
        middle: Text('PageScaffold'),
      ),
      child: Center(
          child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          const Text("Some centered text"),
          CupertinoButton.filled(
              child: const Text("Press me"),
              onPressed: () => Navigator.of(context)
                      .push(CupertinoPageRoute(builder: (BuildContext context) {
                    return const PageTwo();
                  })))
        ],
      )),
    );
  }
}

class PageTwo extends StatelessWidget {
  const PageTwo({super.key});

  @override
  Widget build(BuildContext context) {
    return const CupertinoPageScaffold(
      navigationBar: CupertinoNavigationBar(
        middle: Text('Page Two'),
      ),
      child: Center(
          child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [Text("Some centered text in page two")],
      )),
    );
  }
}
