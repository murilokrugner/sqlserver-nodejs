/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SD9010', {
    D9_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D9_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    D9_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D9_DTUSO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D9_HORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D9_USUARIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    D9_NSU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    D9_MOTIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
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
    D9_CNPJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    D9_FILORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D9_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    }
  }, {
    tableName: 'SD9010'
  });
};
