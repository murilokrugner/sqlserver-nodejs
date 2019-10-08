/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FK9010', {
    FK9_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FK9_IDMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    FK9_SITUA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FK9_EDTPMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    FK9_TASPMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    FK9_OPERAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FK9_NUMMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FK9_FLDMED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FK9_FORMPG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
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
    },
    FK9_PRJPMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    }
  }, {
    tableName: 'FK9010'
  });
};
