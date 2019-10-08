/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NT1010', {
    NT1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NT1_CCONTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NT1_SEQUEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NT1_PARC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    NT1_DATAIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NT1_DATAFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NT1_CMOEDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NT1_VALORB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NT1_VALORA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NT1_DATAAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NT1_DATAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NT1_DESCRI: {
      type: "VARBINARY",
      allowNull: true
    },
    NT1_SITUAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NT1_CTPFTU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NT1_CPREFT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NT1_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    NT1_COTAC1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NT1_COTAC2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NT1_QTDADE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'NT1010'
  });
};
