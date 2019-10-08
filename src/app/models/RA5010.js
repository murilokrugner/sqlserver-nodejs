/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RA5010', {
    RA5_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA5_CARGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    RA5_CURSO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    RA5_HORAS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RA5_VALIDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RA5_NOTA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RA5_FREQUE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RA5_PRIORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RA5_UNPRIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA5_EFICAC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RA5_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
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
    tableName: 'RA5010'
  });
};
