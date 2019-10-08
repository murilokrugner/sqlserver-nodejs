/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FK1010', {
    FK1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FK1_IDFK1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    FK1_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FK1_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FK1_MOEDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FK1_NATURE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    FK1_VENCTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FK1_RECPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FK1_TPDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FK1_HISTOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    FK1_VLMOE2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FK1_LOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FK1_MOTBX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FK1_ORDREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FK1_FILORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FK1_ARCNAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    FK1_CNABOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FK1_TXMOED: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FK1_SITCOB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FK1_SERREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FK1_MULNAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FK1_AUTBCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    FK1_CCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    FK1_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FK1_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FK1_DIACTB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FK1_NODIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    FK1_LA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FK1_IDDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    FK1_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    FK1_IDCOMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    FK1_IDPROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
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
    tableName: 'FK1010'
  });
};
