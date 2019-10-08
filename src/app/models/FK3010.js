/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FK3010', {
    FK3_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FK3_IDFK3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    FK3_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FK3_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FK3_MOEDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FK3_NATURE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    FK3_RECPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FK3_IDRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    FK3_IMPOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FK3_FILORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FK3_BASIMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FK3_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FK3_VLMOE2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FK3_IDORIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    FK3_TABORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FK3_STATUS: {
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
    },
    FK3_CLIFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FK3_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FK3_CGC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    FK3_RAICGC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FK3_CODFKM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    }
  }, {
    tableName: 'FK3010'
  });
};
