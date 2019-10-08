/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPED061', {
    ID_ENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    IDTSS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    IDERP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                            '
    },
    XMLDOC: {
      type: "IMAGE",
      allowNull: true
    },
    STATUS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    DESCSTAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    FLAG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    DTTSSREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    HRTSSREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DTDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    HRDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TOTVSCOLAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    MODELO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    AMBIENTE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    DTTSSENV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    HRTSSENV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DTRETNEOG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    HRRETNEOG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DTFLAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    HRFLAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NUMDOCNEOG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    IDENTNEOG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    XMLNEO: {
      type: "IMAGE",
      allowNull: true
    },
    OPERACAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '(0)',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '(0)'
    },
    LOGID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    }
  }, {
    tableName: 'SPED061'
  });
};
