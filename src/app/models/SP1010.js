/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SP1010', {
    P1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    P1_RELOGIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    P1_CODREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    P1_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    P1_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    P1_TIPOREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    P1_HORAINI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    P1_HORAFIM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    P1_GERAFOL: {
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
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'SP1010'
  });
};
