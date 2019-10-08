/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DD1010', {
    DD1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DD1_CODFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DD1_LOJFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DD1_DTCALC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DD1_DIATRB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DD1_DTAAFA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DD1_DIAAFA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DD1_DTARET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DD1_NUMLIB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DD1_CTRLIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DD1_STATUS: {
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
      defaultValue: '((0))',
      primaryKey: true
    }
  }, {
    tableName: 'DD1010'
  });
};
