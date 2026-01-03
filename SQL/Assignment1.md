**SQL QUERY FOR ALL ASSIGNMENTS=======================>>>>>.**



SELECT \*

FROM EMP;



EMPNO ENAME      JOB              MGR HIREDATE         SAL       COMM     DEPTNO

----- ---------- --------- ---------- --------- ---------- ---------- ----------

&nbsp;7369 SMITH      CLERK           7902 17-DEC-80        800                    20

&nbsp;7499 ALLEN      SALESMAN        7698 20-FEB-81       1600        300         30

&nbsp;7521 WARD       SALESMAN        7698 22-FEB-81       1250        500         30

&nbsp;7566 JONES      MANAGER         7839 02-APR-81       2975                    20

&nbsp;7654 MARTIN     SALESMAN        7698 28-SEP-81       1250       1400         30

&nbsp;7698 BLAKE      MANAGER         7839 01-MAY-81       2850                    30

&nbsp;7782 CLARK      MANAGER         7839 09-JUN-81       2450                    10

&nbsp;7788 SCOTT      ANALYST         7566 19-APR-87       3000                    20

&nbsp;7839 KING       PRESIDENT            17-NOV-81       5000                    10

&nbsp;7844 TURNER     SALESMAN        7698 08-SEP-81       1500          0         30

&nbsp;7876 ADAMS      CLERK           7788 23-MAY-87       1100                    20

&nbsp;7900 JAMES      CLERK           7698 03-DEC-81        950                    30

&nbsp;7902 FORD       ANALYST         7566 03-DEC-81       3000                    20

&nbsp;7934 MILLER     CLERK           7782 23-JAN-82       1300                    10









SQL> SELECT \*

&nbsp; 2  FROM EMP

&nbsp; 3  WHERE JOB='CLERK' AND SAL>1500;



no rows selected



SQL> SELECT \* 

&nbsp; 2  FROM EMP

&nbsp; 3  WHERE JOB='CLERK' AND SAL<1500;



&nbsp;    EMPNO ENAME      JOB              MGR HIREDATE         SAL       COMM     DEPTNO

---------- ---------- --------- ---------- --------- ---------- ---------- ----------

&nbsp;     7369 SMITH      CLERK           7902 17-DEC-80        800                    20

&nbsp;     7876 ADAMS      CLERK           7788 23-MAY-87       1100                    20

&nbsp;     7900 JAMES      CLERK           7698 03-DEC-81        950                    30

&nbsp;     7934 MILLER     CLERK           7782 23-JAN-82       1300                    10



SQL> SELECT ENAME, HIREDATE

&nbsp; 2  FROM EMP

&nbsp; 3  WHERE JOB='MANAGER' AND DEPTNO=30;



ENAME      HIREDATE

---------- ---------

BLAKE      01-MAY-81











SQL> SELECT \* 

&nbsp; 2  FROM EMP

&nbsp; 3  WHERE JOB='CLERK' AND SAL<1500;



&nbsp;    EMPNO ENAME      JOB              MGR HIREDATE         SAL       COMM     DEPTNO

---------- ---------- --------- ---------- --------- ---------- ---------- ----------

&nbsp;     7369 SMITH      CLERK           7902 17-DEC-80        800                    20

&nbsp;     7876 ADAMS      CLERK           7788 23-MAY-87       1100                    20

&nbsp;     7900 JAMES      CLERK           7698 03-DEC-81        950                    30

&nbsp;     7934 MILLER     CLERK           7782 23-JAN-82       1300                    10



SQL> SELECT ENAME, HIREDATE

&nbsp; 2  FROM EMP

&nbsp; 3  WHERE JOB='MANAGER' AND DEPTNO=30;



ENAME      HIREDATE

---------- ---------

BLAKE      01-MAY-81



SQL> 

SQL> SELECT \* 

&nbsp; 2  FROM EMP

&nbsp; 3  

SQL> SELECT \* SAL\*12 ANNUALSAL

&nbsp; 2  FROM EMP

&nbsp; 3  WHERE DEPTNO=30 AND JOB='SALESMAN' AND ANNUALSAL>14000;

SELECT \* SAL\*12 ANNUALSAL

&nbsp;        \*

ERROR at line 1:

ORA-00923: FROM keyword not found where expected





SQL> SELECT \*

&nbsp; 2  FROM EMP

&nbsp; 3  WHERE DEPTNO=30 OR JOB='ANALYST';



&nbsp;    EMPNO ENAME      JOB              MGR HIREDATE         SAL       COMM     DEPTNO

---------- ---------- --------- ---------- --------- ---------- ---------- ----------

&nbsp;     7499 ALLEN      SALESMAN        7698 20-FEB-81       1600        300         30

&nbsp;     7521 WARD       SALESMAN        7698 22-FEB-81       1250        500         30

&nbsp;     7654 MARTIN     SALESMAN        7698 28-SEP-81       1250       1400         30

&nbsp;     7698 BLAKE      MANAGER         7839 01-MAY-81       2850                    30

&nbsp;     7788 SCOTT      ANALYST         7566 19-APR-87       3000                    20

&nbsp;     7844 TURNER     SALESMAN        7698 08-SEP-81       1500          0         30

&nbsp;     7900 JAMES      CLERK           7698 03-DEC-81        950                    30

&nbsp;     7902 FORD       ANALYST         7566 03-DEC-81       3000                    20



8 rows selected.



SQL> SELECT ENAME 

&nbsp; 2  FROM EMP

&nbsp; 3  WHERE SAL<1100 AND JON='CLERK';

WHERE SAL<1100 AND JON='CLERK'

&nbsp;                  \*

ERROR at line 3:

ORA-00904: "JON": invalid identifier





SQL> SELECT ENAME 

&nbsp; 2  FROM EMP 

&nbsp; 3  WHERE SAL<1100 AND JOB='CLERK';



ENAME

----------

SMITH

JAMES



SQL> 

SQL> SELECT ENAME 

&nbsp; 2  FROM EMP

&nbsp; 3  WHERE SAL>1100 AND JOB='CLERK';



ENAME

----------

MILLER



SQL> 

SQL> SELECT ENAME, SAL, SAL\*12 ANNUALSAL, DEPTNO

&nbsp; 2  FROM EMP

&nbsp; 3  WHERE DEPTNO=30 AND ANNUALSAL>12000;

WHERE DEPTNO=30 AND ANNUALSAL>12000

&nbsp;                   \*

ERROR at line 3:

ORA-00904: "ANNUALSAL": invalid identifier





SQL> SELECT EMPNO, ENAME

&nbsp; 2  FROM EMP

&nbsp; 3  WHERE JOB='MANAGER' AND DEPTNO=20;



&nbsp;    EMPNO ENAME

---------- ----------

&nbsp;     7566 JONES



SQL> SELECT \* 

&nbsp; 2  FROM EMP

&nbsp; 3  WHERE DEPTNO=20 OR DEPTNO=30;



&nbsp;    EMPNO ENAME      JOB              MGR HIREDATE         SAL       COMM     DEPTNO

---------- ---------- --------- ---------- --------- ---------- ---------- ----------

&nbsp;     7369 SMITH      CLERK           7902 17-DEC-80        800                    20

&nbsp;     7499 ALLEN      SALESMAN        7698 20-FEB-81       1600        300         30

&nbsp;     7521 WARD       SALESMAN        7698 22-FEB-81       1250        500         30

&nbsp;     7566 JONES      MANAGER         7839 02-APR-81       2975                    20

&nbsp;     7654 MARTIN     SALESMAN        7698 28-SEP-81       1250       1400         30

&nbsp;     7698 BLAKE      MANAGER         7839 01-MAY-81       2850                    30

&nbsp;     7788 SCOTT      ANALYST         7566 19-APR-87       3000                    20

&nbsp;     7844 TURNER     SALESMAN        7698 08-SEP-81       1500          0         30

&nbsp;     7876 ADAMS      CLERK           7788 23-MAY-87       1100                    20

&nbsp;     7900 JAMES      CLERK           7698 03-DEC-81        950                    30

&nbsp;     7902 FORD       ANALYST         7566 03-DEC-81       3000                    20









=====================================================================================================



SQL> 

SQL> SELECT \* 

&nbsp; 2  FROM EMP

&nbsp; 3  WHERE JOB='ANALYST' AND DEPTNO=10;



no rows selected



SQL> 

SQL> SELECT \*

&nbsp; 2  FROM EMP

&nbsp; 3  WHERE JOB='PRESIDENT' AND SAL=4000;



no rows selected



SQL> SELECT ENAME , DEPTNO

&nbsp; 2  FROM EMP

&nbsp; 3  WHERE JOB='CLERK' AND DEPTNO=10 OR 20;

WHERE JOB='CLERK' AND DEPTNO=10 OR 20

&nbsp;                                   \*

ERROR at line 3:

ORA-00920: invalid relational operator





SQL> SELECT ENAME, DEPTNO 

&nbsp; 2  FROM EMP

&nbsp; 3  WHERE JON='CLERK' AND DEPTNO=10 OR DEPTNO=20;

WHERE JON='CLERK' AND DEPTNO=10 OR DEPTNO=20

&nbsp;     \*

ERROR at line 3:

ORA-00904: "JON": invalid identifier





SQL> SELECT ENAME , DEPTNO

&nbsp; 2  FROM EMP

&nbsp; 3  WHERE JOB='CLERK' AND DEPTNO=10 OR DEPTNO=20;



ENAME          DEPTNO

---------- ----------

SMITH              20

JONES              20

SCOTT              20

ADAMS              20

FORD               20

MILLER             10



6 rows selected.



SQL> SELECT \*

&nbsp; 2  FROM EMP;



&nbsp;    EMPNO ENAME      JOB              MGR HIREDATE         SAL       COMM     DEPTNO

---------- ---------- --------- ---------- --------- ---------- ---------- ----------

&nbsp;     7369 SMITH      CLERK           7902 17-DEC-80        800                    20

&nbsp;     7499 ALLEN      SALESMAN        7698 20-FEB-81       1600        300         30

&nbsp;     7521 WARD       SALESMAN        7698 22-FEB-81       1250        500         30

&nbsp;     7566 JONES      MANAGER         7839 02-APR-81       2975                    20

&nbsp;     7654 MARTIN     SALESMAN        7698 28-SEP-81       1250       1400         30

&nbsp;     7698 BLAKE      MANAGER         7839 01-MAY-81       2850                    30

&nbsp;     7782 CLARK      MANAGER         7839 09-JUN-81       2450                    10

&nbsp;     7788 SCOTT      ANALYST         7566 19-APR-87       3000                    20

&nbsp;     7839 KING       PRESIDENT            17-NOV-81       5000                    10

&nbsp;     7844 TURNER     SALESMAN        7698 08-SEP-81       1500          0         30

&nbsp;     7876 ADAMS      CLERK           7788 23-MAY-87       1100                    20

&nbsp;     7900 JAMES      CLERK           7698 03-DEC-81        950                    30

&nbsp;     7902 FORD       ANALYST         7566 03-DEC-81       3000                    20

&nbsp;     7934 MILLER     CLERK           7782 23-JAN-82       1300                    10



14 rows selected.



SQL> SELECT \*

&nbsp; 2  FROM EMP

&nbsp; 3  WHERE JOB='CLERK' OR JOB='MANAGER' AND DEPTNO=10;



&nbsp;    EMPNO ENAME      JOB              MGR HIREDATE         SAL       COMM     DEPTNO

---------- ---------- --------- ---------- --------- ---------- ---------- ----------

&nbsp;     7369 SMITH      CLERK           7902 17-DEC-80        800                    20

&nbsp;     7782 CLARK      MANAGER         7839 09-JUN-81       2450                    10

&nbsp;     7876 ADAMS      CLERK           7788 23-MAY-87       1100                    20

&nbsp;     7900 JAMES      CLERK           7698 03-DEC-81        950                    30

&nbsp;     7934 MILLER     CLERK           7782 23-JAN-82       1300                    10



SQL> SELECT ENAME 

&nbsp; 2  FROM EMP

&nbsp; 3  WHERE DEPTNO=10 OR 20 OR 30 OR 40;

WHERE DEPTNO=10 OR 20 OR 30 OR 40

&nbsp;                     \*

ERROR at line 3:

ORA-00920: invalid relational operator





SQL> SELECT ENAME 

&nbsp; 2  FROM EMP

&nbsp; 3  WHERE DEPTNO=10 =20 =30 =40;

WHERE DEPTNO=10 =20 =30 =40

&nbsp;               \*

ERROR at line 3:

ORA-00933: SQL command not properly ended





SQL> SELECT ENAME 

&nbsp; 2  FROM EMP 

&nbsp; 3  WHERE EMP

&nbsp; 4  

SQL> SELECT ENAME

&nbsp; 2  FROM EMP

&nbsp; 3  WHERE DEPTNO=10=20=30=40;

WHERE DEPTNO=10=20=30=40

&nbsp;              \*

ERROR at line 3:

ORA-00933: SQL command not properly ended





SQL> SELECT ENAME

&nbsp; 2  FROM EMP

&nbsp; 3  WHERE DEPTNO=10;



ENAME

----------

CLARK

KING

MILLER



SQL> 

SQL> SELECT \*

&nbsp; 2  FROM EMP

&nbsp; 3  WHERE EMPNO=7902 AND 7839;

WHERE EMPNO=7902 AND 7839

&nbsp;                       \*

ERROR at line 3:

ORA-00920: invalid relational operator





SQL> SELECT \*

&nbsp; 2  FROM EMP

&nbsp; 3  WHERE EMPNO=7902 AND EMPNO=7839;



no rows selected



SQL> SELECT \*

&nbsp; 2  FROM EMP

&nbsp; 3  WHERE JOB='MANAGER' OR SALESMAN OR CLERK;

WHERE JOB='MANAGER' OR SALESMAN OR CLERK

&nbsp;                               \*

ERROR at line 3:

ORA-00920: invalid relational operator





SQL> SELECT \* 

&nbsp; 2  FROM EMP

&nbsp; 3  WHERE JOB='MANAGER' OR JOB='SALESMAN' OR JOB='CLERK';



&nbsp;    EMPNO ENAME      JOB              MGR HIREDATE         SAL       COMM     DEPTNO

---------- ---------- --------- ---------- --------- ---------- ---------- ----------

&nbsp;     7369 SMITH      CLERK           7902 17-DEC-80        800                    20

&nbsp;     7499 ALLEN      SALESMAN        7698 20-FEB-81       1600        300         30

&nbsp;     7521 WARD       SALESMAN        7698 22-FEB-81       1250        500         30

&nbsp;     7566 JONES      MANAGER         7839 02-APR-81       2975                    20

&nbsp;     7654 MARTIN     SALESMAN        7698 28-SEP-81       1250       1400         30

&nbsp;     7698 BLAKE      MANAGER         7839 01-MAY-81       2850                    30

&nbsp;     7782 CLARK      MANAGER         7839 09-JUN-81       2450                    10

&nbsp;     7844 TURNER     SALESMAN        7698 08-SEP-81       1500          0         30

&nbsp;     7876 ADAMS      CLERK           7788 23-MAY-87       1100                    20

&nbsp;     7900 JAMES      CLERK           7698 03-DEC-81        950                    30

&nbsp;     7934 MILLER     CLERK           7782 23-JAN-82       1300                    10



11 rows selected.



SQL> SELECT \*

&nbsp; 2  FROM EMP

&nbsp; 3  

SQL> 

SQL> SELECT ENAME 

&nbsp; 2  FROM EMP

&nbsp; 3  WHERE HIREDATE>81 AND HIREDATE<87;

WHERE HIREDATE>81 AND HIREDATE<87

&nbsp;                             \*

ERROR at line 3:

ORA-00932: inconsistent datatypes: expected DATE got NUMBER









